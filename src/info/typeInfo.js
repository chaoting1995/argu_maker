// Icon
import {
  FaRegFileAlt,
  FaRegUserCircle,
  FaRegClock,
  FaArrowUp,
} from 'react-icons/fa';

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
    class_file: 'file',
  },
  {
    field: 'authName',
    label: <FaRegUserCircle />,
    itemType: ['text', 'input'],
    placeholder: '作者名',
    class_file: 'file',
  },
  {
    field: 'timestamp',
    label: <FaRegClock />,
    itemType: ['text', 'text'],
    class_file: 'file',
    hr: 'border-2',
  },
  {
    field: 'topic',
    label: '辯題',
    itemType: ['text', 'textarea'],
    class_label: 'label-level-1',
    placeholder: '請輸入辯題',
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
    class_label: 'label-level-2',
    placeholder: '',
    hr: 'border-2',
    placeholder: '請輸立場',
  },
  //-------------------------------------
];

const typeInfo = {
  topic: {
    field: 'topic',
    label: '辯題',
    itemType: ['text', 'textarea'],
    class_label: 'label-level-1',
  },
  position: {
    field: 'position',
    itemType: ['select', 'textarea'],
    options: [
      { value: '', placeholder: '持方' },
      { value: 'yes', label: '正方' },
      { value: 'no', label: '反方' },
    ],
    class_label: 'label-level-2',
    placeholder: '(我方立場)',
  },
  standard: {
    field: 'standard', //id
    itemType: ['text', 'textarea'],
    label: '判準',
    class_label: 'label-level-2',
  },
  holdBtn: {
    field: 'holdBtn', //id
    itemType: ['select', 'buttons'],
    options: [
      { value: 'def', label: '定義' },
      { value: 'pre', label: '前提' },
      { value: 'arg', label: '論點' },
    ],
    class_label: 'label-level-2',
  },
  hold_1: {
    field: 'hold_1',
    label: '前提', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-2',
  },
  proofBtn: {
    field: 'proofBtn', //id
    itemType: ['select', 'buttons'],
    options: [
      { value: '', placeholder: '論證' },
      { value: 'simile', label: '比喻' },
      { value: 'evidence', label: '例證' },
      { value: 'logic', label: '推論' },
    ],
    class_label: 'label-level-3',
  },

  proof_1: {
    field: 'proof_1',
    label: '比喻', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-3',
    placeholder: '就好比...',
  },
  proof_2: {
    field: 'proof_2',
    label: '例證', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-3',
  },
  proof_3: {
    field: 'proof_3',
    label: '推論', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-3',
    placeholder: '因為...',
  },
  hold_2: {
    field: 'hold_2',
    label: '定義', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-2',
  },
  hold_2_1: {
    field: 'hold_2_1',
    label: '翻譯', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-2',
  },
  hold_3: {
    field: 'hold_3',
    label: '論點', // TODO: 動態寫入
    itemType: ['text', 'textarea'],
    class_label: 'label-level-2',
  },
  setArgu: {
    field: 'setArgu',
    label: '立論',
    itemType: ['text', 'text'],
    content: '接著從這個判準，回頭檢視雙方立場',
    class_label: 'label-level-2',
  },
  stick: {
    field: 'stick',
    label: '扣題',
    itemType: ['text', 'text'],
    class_label: 'label-level-1',
  },
  arrowUp: {
    field: 'arrowUp',
    label: <FaArrowUp />,
    itemType: ['text', 'textarea'],
    class_label: '',
  },
  conclusion: {
    field: 'conclusion',
    label: '結論',
    itemType: ['text', 'textarea'],
    class_label: 'label-level-1',
    placeholder: '基於上述，我方認為',
  },
  standard_war: {
    field: 'standard_war',
    label: '判準戰爭',
    itemType: ['text', 'textarea'],
    class_label: 'label-level-1',
  },
  standard_other_side: {
    field: 'standard_other_side',
    label: '他方判準',
    itemType: ['text', 'textarea'],
    class_label: 'label-level-2',
  },
  standard_compare: {
    field: 'standard_other_side',
    label: '比較判準',
    itemType: ['text', 'textarea'],
    class_label: 'label-level-2',
    placeholder: '為何我們的判準更值得被採納...',
  },
};
export default typeInfo;

// rgb(232, 240, 254) !important;
