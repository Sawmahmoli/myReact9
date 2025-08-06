import Employee from '../components/Emplyee';

// 建立物件資料
const employee={
    emp1:{
        name:'員工1',
        age:'21'
    },
    emp1:{},
    emp1:{},
}

// 建立陣列物件資料
const arrEmployee=[
    {
        id:1,
        name:"員工1",
        age:"21",
        h:160,
        w:50,
    },
    {
        id:2,
        name:"員工2",
        age:"22",
        h:168,
        w:70,
    },
    {
        id:3,
        name:"員工3",
        age:"23",
        h:159,
        w:53,
    }
]

const App = () => {
  return (
    <div>
        <h1>員工資料</h1>

        {/* 呼叫員工元件 => 使用陣列物件資料，搭配map */}
        {
            arrEmployee.map((emp)=>{
                return(
                <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w}/>
                )
            })
        }

        
        {/* 呼叫員工元件 => 使用物件資料 */}
        {/* <Employee name={employee.emp1.name} age={employee.emp1.age}/>
        <Employee name={employee.emp2.name} age={employee.emp2.age}/>
        <Employee name={employee.emp3.name} age={employee.emp3.age}/> */}

        {/* <Employee name="員工1" age="21歲"></Employee> */}
        {/* 呼叫員工元件 => 使用固定值 */}
        {/* <Employee name="員工1" age="21"/>
        <Employee name="員工2" age="22"/>
        <Employee name="員工3" age="23"/> */}
    </div>
  )
}