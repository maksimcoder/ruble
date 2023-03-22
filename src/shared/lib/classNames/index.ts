type Mods = Record<string, boolean | string>;

export function classNames(cls: string, additional?: string[], mods?: Mods): string {
	const classesArray = [cls];

	if (additional) {
		const additionalClasses = additional?.filter(Boolean);
		classesArray.push(...additionalClasses);
	}

	if (mods) {
		const stringsFromMods = Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className);
		classesArray.push(...stringsFromMods);
	}

	return classesArray.join(' ');
}
