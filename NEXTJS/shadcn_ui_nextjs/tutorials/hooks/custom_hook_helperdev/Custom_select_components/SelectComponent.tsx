import Select, { Option } from "./Select";

type TOptions = {
  id: number;
  name: string;
};

const options: TOptions[] = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 1,
    name: "NextJS",
  },
];


export default function SelectComponent(){
    return (
        <Select 
  direction="vertical" // "horizontal" || "vertical"
  lblText="Courses: "
>
    {options.map((opt: TOptions) => (
       <Option key={opt.id} value={opt.name}>
         {opt.name}
       </Option>
     ))}
</Select>

/* Or */

<Select 
  direction="vertical" // "horizontal" || "vertical"
  lblText="Courses: "
  className="Có thể Css thêm ở đây!!"
>
    {options.map((opt: TOptions) => (
       <Option key={opt.id} value={opt.name}>
         {opt.name}
       </Option>
     ))}
</Select>
    )
}