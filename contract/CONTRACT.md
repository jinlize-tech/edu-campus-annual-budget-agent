# 输入输出契约

## 输入字段

| 键 | 名称 | 类型 | 必填 |
|---|---|---|---|
| `annual_targets` | 年度经营目标 | string | 是 |
| `enrollment_plan` | 招生节奏 | array | 是 |
| `course_plan` | 课程计划 | array | 是 |
| `pricing` | 价格与优惠 | array | 是 |
| `staffing_plan` | 人员与教师计划 | array | 是 |
| `compensation_rules` | 薪酬规则 | string | 是 |
| `fixed_costs` | 固定费用 | array | 是 |
| `capital_expenditure` | 资本支出 | array | 否 |
| `historical_actuals` | 历史实际 | array | 否 |
| `budget_months` | 预算期间 | integer | 是 |

## 状态

- `completed`：核心成果完整，关键结论人工确认要求满足。
- `completed_with_limits`：至少一项实质成果，说明限制、已完成和受阻范围。
- `needs_input`：必填字段缺失。
- `needs_confirmation`：资料冲突或人工确认未完成。
- `failed`：计算或工具失败。

## 输出

- `年度预算`：结构化条目数组，不允许空壳或占位文本。
- `驱动假设表`：结构化条目数组，不允许空壳或占位文本。
- `部门预算`：结构化条目数组，不允许空壳或占位文本。
- `月度分布`：结构化条目数组，不允许空壳或占位文本。
- `基准/保守情景`：结构化条目数组，不允许空壳或占位文本。
- `审批摘要`：结构化条目数组，不允许空壳或占位文本。
- `跟踪指标`：结构化条目数组，不允许空壳或占位文本。

完整机器契约见`contract/input.schema.json`、`contract/output.schema.json`和`contract/runtime_contract.json`。
