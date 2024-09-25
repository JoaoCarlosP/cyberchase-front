import { Table as AntTable, TableProps } from 'antd'
import styles from './Table.module.scss'
import { AnyObject } from 'antd/es/_util/type'

function Table({ columns, data, canUseScroll }: {
  columns: TableProps<AnyObject>['columns'],
  data: object[],
  canUseScroll?: boolean
}) {
  return (
    <>
      <AntTable
        columns={columns}
        dataSource={data}
        className={styles.table}
        scroll={{ x: canUseScroll || undefined }}
      />
    </>
  )
}

export default Table