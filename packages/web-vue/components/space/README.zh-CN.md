```yaml
meta:
  type: 组件
  category: 布局
title: 间距 Space
description: 设置组件之间的间距
```

@import ./__demo__/basic.md

@import ./__demo__/vertical.md

@import ./__demo__/size.md

@import ./__demo__/align.md

@import ./__demo__/wrap.md


### `<space>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|align|对齐方式|`'start' \| 'end' \| 'center' \| 'baseline'`|`-`|
|direction|间距方向|`'vertical' \| 'horizontal'`|`'horizontal'`|
|size|间距大小，支持分别制定横向和竖向的间距|`number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SpaceSize, SpaceSize]`|`'small'`|
|wrap|环绕类型的间距，用于折行的场景。|`boolean`|`false`|


