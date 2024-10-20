import { FunnelSimple } from '@phosphor-icons/react'
import { Button, Dropdown, Input } from 'antd'
import React from 'react'

import styles from './TableFilters.module.scss'

interface ITableFiltersProps {
  onSearch: (value: string) => void
  filters?: React.ReactNode
  onClickAdd: () => void
}

function TableFilters({ onSearch, filters, onClickAdd }: ITableFiltersProps) {
  return (
    <section className={styles.container}>
      <Input.Search
        enterButton
        placeholder="Search"
        onSearch={onSearch}
        className={styles.inputSearch}
      />

      <div className={styles.buttons}>
        {filters && <Dropdown trigger={['click']} dropdownRender={() => (
          <article className={styles.dropdawnFilters}>
            {filters}
          </article>
        )}>
          <Button type='default' className={styles.buttonFilter} onClick={(e) => e.preventDefault()}>
            <FunnelSimple size={18} />
          </Button>
        </Dropdown>}

        <Button type="primary" className={styles.buttonAddMore} onClick={onClickAdd}>
          Adicionar
        </Button>
      </div>
    </section>
  )
}

export default TableFilters