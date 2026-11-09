# 使用说明

## 适用任务

连锁机构计划新开两个校区，需要把招生、教师和现金预算放进同一版本。

## 准备输入

年度经营目标、课程计划、招生节奏、班容、价格、教师编制、薪酬规则、固定费用、资本支出、历史实际。使用前先脱敏姓名、联系方式和与任务无关的敏感信息。

## 操作步骤

1. 明确预算边界
2. 收集业务驱动量
3. 建立联动模型
4. 分部门确认
5. 汇总与情景
6. 输出审批包
7. 设定月度跟踪

## 校验命令

```powershell
node scripts/validate_input.js examples/typical_input.json
node scripts/validate_output.js examples/typical_output.json
```

## 状态使用

- `completed`：核心成果完整。
- `completed_with_limits`：只完成可验证部分，并说明受阻范围。
- `needs_input`：缺少关键输入。
- `needs_confirmation`：资料冲突或需人工确认。
- `failed`：工具或计算失败，提供恢复动作。

## 人工确认

业务负责人复核输入事实、关键假设和最终成果适用范围后，成果才可进入正式业务使用。
