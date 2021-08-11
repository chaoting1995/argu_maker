// Icon
import { FaRegFileAlt, FaRegUserCircle, FaRegClock } from 'react-icons/fa';

//---------------------------------------
// ['text', 'text'],
// ['text', 'input'],
// ['text', 'textarea'],

// 現有欄位類型組合
// ['select', 'textarea'],
// ['select', 'buttons'],

export const itemTypeInfoArr = [
  {
    field: 'fileName',
    label: <FaRegFileAlt />,
    itemType: ['text', 'input'],
    placeholder: '未命名文件',
    class_label: 'file',
  },
  {
    field: 'authName',
    label: <FaRegUserCircle />,
    itemType: ['text', 'input'],
    placeholder: '作者名',
    class_label: 'file',
  },
  {
    field: 'timestamp',
    label: <FaRegClock />,
    itemType: ['text', 'text'],
    class_label: 'file',
    hr: 'border-2',
  },
  {
    field: 'topic',
    label: '辯題',
    itemType: ['text', 'textarea'],
    placeholder: '請輸入辯題',
    class_label: 'label-level-1',
  },
  {
    field: 'side',
    label: '立場',
    itemType: ['text', 'textarea'],
    options: [
      { value: '', placeholder: '持方' },
      { value: 'yes', label: '正方' },
      { value: 'no', label: '反方' },
    ],
    placeholder: '請輸立場',
    class_label: 'label-level-1',
    hr: 'border-2',
  },
];

const typeInfo = {
  sectionBtn: {
    label: '段落', //id
    itemType: ['text', 'buttons'],
    class_label: 'label-level-2',
    isAddBtn: true,
    isDelBtn: true,
    isSortBtn: false,
    isFaCut: true,
    // hr: 'border-1',
  },

  pointBtn: {
    field: 'pointBtn', //id
    itemType: ['select', 'buttons'],
    options: [
      { value: 'point_1', label: '重點' },
      { value: 'point_2', label: '成立' },
      { value: 'point_3', label: '目的' },
      { value: 'point_4', label: '效果' },
      { value: 'point_5', label: '反應' },
    ],
    class_label: 'label-level-3',
    isAddBtn: true,
    isDelBtn: true,
    isSortBtn: false,
    isFaTrashAlt: true,
  },
  point_1: {
    field: 'point_1',
    itemType: ['text', 'textarea'],
    label: '重點',
    placeholder: '請抓出段落重點、主張',
    class_label: 'bg-danger text-white',
    isFaTrashAlt: true,
    isInputBorder: true,
  },
  point_2: {
    field: 'point_2',
    itemType: ['text', 'textarea'],
    label: '成立',
    placeholder: '該主張直觀上是否說得通？',
    class_label: 'bg-warning text-white',
    isFaTrashAlt: true,
    isInputBorder: true,
  },
  point_3: {
    field: 'point_3',
    itemType: ['text', 'textarea'],
    label: '目的',
    placeholder: '該段落有什麼戰略性目的？',
    class_label: 'bg-success text-white',
    isFaTrashAlt: true,
    isInputBorder: true,
  },
  point_4: {
    field: 'point_4',
    itemType: ['text', 'textarea'],
    label: '效果',
    placeholder: '效果強弱？是否達成目的？',
    class_label: 'bg-primary text-white',
    isFaTrashAlt: true,
    isInputBorder: true,
  },
  point_5: {
    field: 'point_5',
    itemType: ['text', 'textarea'],
    label: '反應',
    placeholder: '承認、攻擊或擱置？',
    class_label: 'bg-info text-white',
    isFaTrashAlt: true,
    isInputBorder: true,
  },
};
export default typeInfo;

// rgb(232, 240, 254) !important;
