'use strict';

const FORMULA_VERSION = '1.0.0';

function fail(code, message, field) {
  return { ok: false, error: { code, message, field: field || null, formula_version: FORMULA_VERSION } };
}

function money(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function finiteNumber(value, field, minimum) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  if (minimum !== undefined && value < minimum) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  return value;
}

function ratio(value, field) {
  finiteNumber(value, field, 0);
  if (value > 1) throw new Error(`INPUT_INVALID:${field}`);
  return value;
}

function run(fn, input) {
  try {
    return { ok: true, formula_version: FORMULA_VERSION, result: fn(input) };
  } catch (error) {
    const [code, field] = String(error.message).split(':');
    return fail(code || 'CALCULATION_FAILED', code === 'INPUT_INVALID' ? '输入缺失或非法' : String(error.message), field);
  }
}

function calculateImpl(input) {
  const enrollment = finiteNumber(input.annual_enrollment, 'annual_enrollment', 0);
  const averagePrice = finiteNumber(input.average_price, 'average_price', 0);
  const discount = ratio(input.discount_rate, 'discount_rate');
  const refund = ratio(input.refund_rate, 'refund_rate');
  const teacherPerStudent = finiteNumber(input.teacher_cost_per_student, 'teacher_cost_per_student', 0);
  const fixedStaff = finiteNumber(input.fixed_staff_cost, 'fixed_staff_cost', 0);
  const marketing = finiteNumber(input.marketing_cost, 'marketing_cost', 0);
  const rent = finiteNumber(input.rent_cost, 'rent_cost', 0);
  const other = finiteNumber(input.other_fixed_cost, 'other_fixed_cost', 0);
  const gross = enrollment * averagePrice;
  const net = gross * (1 - discount) * (1 - refund);
  const teacherCost = enrollment * teacherPerStudent;
  const totalCost = teacherCost + fixedStaff + marketing + rent + other;
  const annualResult = net - totalCost;
  if (net <= 0) throw new Error('CALCULATION_FAILED:net_revenue');
  return {
    gross_course_revenue: money(gross),
    net_revenue: money(net),
    teacher_cost: money(teacherCost),
    total_cost: money(totalCost),
    annual_result: money(annualResult),
    annual_margin_rate: annualResult / net,
    currency: '本币',
  };
}

function calculate(input) {
  return run(calculateImpl, input || {});
}

module.exports = { calculate, FORMULA_VERSION };
