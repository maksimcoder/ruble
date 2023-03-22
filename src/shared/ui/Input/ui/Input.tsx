import { FC, InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const Input: FC<IInputProps> = ({ label, ...props }) => {
	return (
		<div className={classNames('input', [], { 'input--with-label': !!label })}>
			{label ? (
				<label>
					<span className={styles.input__label}>{label}</span>
					<input className='input__item' {...props} />
				</label>
			) : (
				<input className='input__item' {...props} />
			)}
		</div>
	);
};

export { Input };
