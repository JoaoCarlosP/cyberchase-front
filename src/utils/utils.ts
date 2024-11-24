import { UploadFile } from 'antd'
import { RcFile } from 'antd/lib/upload/interface' // RcFile é o tipo correto

export const base64ToUploadFile = (base64Data: string, fileName: string): UploadFile => {
  const arr = base64Data.split(',')
  const mimeType = arr[0].match(/:(.*?)/)?.[1] || ''
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  // Cria o objeto File
  const file = new File([u8arr], fileName, { type: mimeType })

  // Converte para RcFile adicionando as propriedades extras
  const rcFile: RcFile = {
    ...file,
    uid: Date.now().toString(), // Define um UID único
    lastModifiedDate: new Date(), // Adiciona a data de modificação
    lastModified: file.lastModified, // Preserve lastModified do objeto File
  }

  // Retorna um objeto UploadFile com RcFile como originFileObj
  return {
    uid: rcFile.uid, // Usa o UID gerado
    name: fileName,
    status: 'done', // Status 'done' para simular que o arquivo foi carregado
    originFileObj: rcFile, // O objeto RcFile convertido
    url: URL.createObjectURL(file), // URL para preview
  }
}


export const getFileType = (base64Data: string): 'image' | 'audio' | 'unknown' => {
  const mimeTypeMatch = base64Data.match(/^data:(.+?)base64,/)
  if (mimeTypeMatch && mimeTypeMatch[1]) {
    const mimeType = mimeTypeMatch[1]
    if (mimeType.startsWith("image")) {
      return "image"
    } else if (mimeType.startsWith("audio")) {
      return "audio"
    } else {
      return "unknown"
    }
  }

  return "unknown"
}