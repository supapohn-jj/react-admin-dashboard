import React from 'react'
import { GridComponent,  ColumnDirective, ColumnsDirective,  Page, Inject, Search, Toolbar} from '@syncfusion/ej2-react-grids' 

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true};

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent 
        dataSource={employeesData} editSettings={editing} toolbar={toolbarOptions} width='auto' pageSettings={{ pageCount: 5 }}
        allowPaging  allowSorting
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]}/>
      </GridComponent>
    </div>
  );
};

export default Employees;