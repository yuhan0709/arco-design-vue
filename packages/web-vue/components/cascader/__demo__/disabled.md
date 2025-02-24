```yaml
title:
  zh-CN: 禁用选项
  en-US: Disabled Option
```

## zh-CN

指定 `option` 的 `disabled` 为 `true`，可以禁用该选项。

---

## en-US

Specify the `disabled` of the `option` as `true` to disable the option.

---

```vue
<template>
  <a-cascader :options="options" :style="{width:'320px'}" placeholder="Please select ..." />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'beijing',
          label: 'Beijing',
          children: [
            {
              value: 'chaoyang',
              label: 'ChaoYang',
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli',
                },
              ],
            },
            {
              value: 'haidian',
              label: 'Haidian',
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli',
                },
              ],
            },
            {
              value: 'dongcheng',
              label: 'Dongcheng',
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli',
                },
              ],
            },
            {
              value: 'xicheng',
              label: 'XiCheng',
              disabled: true,
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli',
                },
              ],
            },
          ],
        },
        {
          value: 'shanghai',
          label: 'Shanghai',
          children: [
            {
              value: 'shanghaishi',
              label: 'Shanghai',
              children: [
                {
                  value: 'huangpu',
                  label: 'Huangpu',
                },
              ],
            },
          ],
        },
      ]
    }
  }
}
</script>
```
