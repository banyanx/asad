import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuote, generateWhatsAppMessage, SERVICE_OPTIONS } from './calculator';
import { isValidSaudiPhone, validateInquiryForm } from './validation';

test('calculateQuote computes base price correctly without addons', () => {
  const result = calculateQuote({
    serviceId: 'securit-10mm',
    area: 10,
    selectedAddonIds: [],
  });

  // Base price is 220 SAR * 10 = 2200 SAR
  assert.equal(result.basePrice, 2200);
  assert.equal(result.addonsPrice, 0);
  assert.equal(result.discountRate, 0);
  assert.equal(result.estimatedTotal, 2200);
  assert.equal(result.vatAmount, 330);
  assert.equal(result.finalTotalWithVat, 2530);
});

test('calculateQuote applies addons and volume discount for >= 20m²', () => {
  const result = calculateQuote({
    serviceId: 'securit-10mm',
    area: 25,
    selectedAddonIds: ['sandblast'], // +40 SAR per m²
  });

  // Base: 220 * 25 = 5500
  // Addon: 40 * 25 = 1000
  // Subtotal = 6500
  // Discount: 5% of 6500 = 325
  // Estimated = 6175
  assert.equal(result.basePrice, 5500);
  assert.equal(result.addonsPrice, 1000);
  assert.equal(result.subtotal, 6500);
  assert.equal(result.discountRate, 0.05);
  assert.equal(result.discountAmount, 325);
  assert.equal(result.estimatedTotal, 6175);
});

test('generateWhatsAppMessage encodes arabic text with details', () => {
  const msg = generateWhatsAppMessage('زجاج سيكوريت 10 مم', 20, 'متر مربع', 4400, 'الملقا');
  assert.ok(msg.length > 0);
  const decoded = decodeURIComponent(msg);
  assert.ok(decoded.includes('زجاج سيكوريت 10 مم'));
  assert.ok(decoded.includes('الملقا'));
  assert.ok(decoded.includes('4400'));
});

test('isValidSaudiPhone validates various Saudi mobile formats', () => {
  assert.equal(isValidSaudiPhone('0551234567'), true);
  assert.equal(isValidSaudiPhone('+966551234567'), true);
  assert.equal(isValidSaudiPhone('00966551234567'), true);
  assert.equal(isValidSaudiPhone('551234567'), true);
  assert.equal(isValidSaudiPhone('055 123 4567'), true);
  assert.equal(isValidSaudiPhone('055-123-4567'), true);

  // Invalid formats
  assert.equal(isValidSaudiPhone('0112345678'), false); // Riyadh landline, not mobile
  assert.equal(isValidSaudiPhone('055123456'), false); // Too short
  assert.equal(isValidSaudiPhone('055123456789'), false); // Too long
  assert.equal(isValidSaudiPhone('abc'), false);
});

test('validateInquiryForm flags missing or invalid fields', () => {
  const invalid = validateInquiryForm({
    fullName: '',
    phoneNumber: '123',
    district: '',
    serviceType: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phoneNumber);
  assert.ok(invalid.errors.district);
  assert.ok(invalid.errors.serviceType);

  const valid = validateInquiryForm({
    fullName: 'أحمد التميمي',
    phoneNumber: '0555123456',
    district: 'حي حطين',
    serviceType: 'securit-10mm',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
