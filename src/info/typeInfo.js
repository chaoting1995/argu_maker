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
    class_label: 'label-level-1',
    placeholder: '請輸入辯題',
    class_label: 'label-level-1',
  },
  {
    field: 'side',
    label: '持方',
    itemType: ['text', 'textarea'],
    options: [
      { value: '', placeholder: '持方' },
      { value: 'yes', label: '正方' },
      { value: 'no', label: '反方' },
    ],
    class_label: 'label-level-1',
    placeholder: '請輸立場',
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
  },
};
export default typeInfo;

// rgb(232, 240, 254) !important;
