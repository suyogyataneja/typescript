
export function decodedValue(colors: string[]): number {
    const colorMap: { [key: string]: number } = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };

    // Take first two colors only
    const firstTwo = colors.slice(0, 2);

    // Map to digits and concatenate as string, then parse to number
    const value = parseInt(firstTwo.map(color => colorMap[color]).join(''));

    return value;
}




export const colors=["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];