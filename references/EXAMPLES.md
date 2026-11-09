# 校区年度预算编制示例

## 典型场景

连锁机构计划新开两个校区，需要把招生、教师和现金预算放进同一版本。

## 具体示例

Agent 先锁定班容、价格、招聘和开校月份，再逐部门协同；任何冲突保留为待确认，不自动平衡数字。

## 脱敏输入示例

```json
{
  "contract_version": "1.2.0",
  "data_status": "confirmed",
  "contains_sensitive_data": false,
  "requested_output_language": "zh-CN",
  "annual_targets": "年度经营目标已核对（脱敏示例）",
  "enrollment_plan": [
    {}
  ],
  "course_plan": [
    {}
  ],
  "pricing": [
    {}
  ],
  "staffing_plan": [
    {}
  ],
  "compensation_rules": "薪酬规则已核对（脱敏示例）",
  "fixed_costs": [
    {}
  ],
  "capital_expenditure": [
    {}
  ],
  "historical_actuals": [
    {}
  ],
  "budget_months": 12,
  "resume_mode": "new"
}
```

## 预期处理

1. 运行输入契约校验。
2. 逐项核对输入来源、版本和口径。
3. 按`references/PROFESSIONAL_PLAYBOOK.md`完成专业分析。
4. 输出年度预算、驱动假设表、月度分布等核心成果。
5. 由业务负责人确认输入事实、关键假设和最终成果适用范围后才可作为正式业务结论。

## 不应出现的输出

- 虚构政策、价格、人员、课程或客户事实。
- 以“暂无”“待完善”等占位文本冒充完成。
- 无依据的确定性判断或伪造人工签批。
