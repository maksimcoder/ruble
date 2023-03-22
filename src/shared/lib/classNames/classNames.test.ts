import { classNames } from './index';

describe('Test of custom classNames library', () => {
	test('one basic class', () => {
		const result = classNames('example');
		expect(result).toBe('example');
	});

	test('basic + additional classes', () => {
		const result = classNames('example', ['withAdditional']);
		expect(result).toBe('example withAdditional');
	});

	test('basic + mode classes', () => {
		const result = classNames('example', [], { mode: true });
		expect(result).toBe('example mode');
	});
});
