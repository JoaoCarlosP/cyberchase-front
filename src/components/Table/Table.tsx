import { Table as AntTable, TableProps } from 'antd'
import styles from './Table.module.scss'
import { AnyObject } from 'antd/es/_util/type'

function Table({ columns, data, canUseScroll, loading }: {
  columns: TableProps<AnyObject>['columns'],
  data: object[],
  canUseScroll?: boolean,
  loading?: boolean
}) {
  return (
    <>
      <AntTable
        columns={columns}
        dataSource={data}
        loading={loading}
        className={styles.table}
        scroll={{ x: canUseScroll || undefined }}
        pagination={{ total: data.length, defaultCurrent: 1, defaultPageSize: 8, showSizeChanger: false }}
      />
    </>
  )
}

export default Table