export const DATA = {
  id: 'dsh-orthostatic',
  name: '体位性低血压',
  prefix: 'orthostatic',
  label: '体位性低血压',
  defaultEeriness: 2,
  gain: 0.28,
  flareChance: 0.3,
  flareGain: 22,
  triggerWeight: 0.85,
  flareWeight: 1,
  reliefs: [
    { id: 'squat', label: '扶着蹲下', relief: 22, minutes: 20, calm: 8 },
    { id: 'sugar', label: '喝点糖水', relief: 16, minutes: 30, calm: 6 },
    { id: 'slow', label: '慢慢起身', relief: 12, minutes: 25, calm: 5 },
  ],
  body: {
    stiff: '站起来的时候眼前灰了一下，顺手扶了下桌沿。',
    ache: '起猛了就发黑，耳朵里嗡一声；得站定两秒才敢迈步。',
    flare: '眼前直接黑掉一大半，只能扶着墙蹲下去；心跳得厉害。',
  },
  voice: {
    base: '允许半句话断在「等一下」，允许说一句「起猛了」；别每一轮都晕。',
    flare: '允许句子只剩半截、允许沉默几秒再接；不要报血压数字。',
  },
}
