const maxLength = maxLength => value =>
    value && value.length > maxLength ? `Максимальна кількість ${maxLength} символів` : undefined

export const maxLength50 = maxLength(50);
export const maxLength13 = maxLength(13);


const minLength = minLength => value =>
    value && value.length < minLength ? `Мінімальна кількість ${minLength} символів` : undefined

export const minLength5 = minLength(5);

export const required = value => {
    if (value) return undefined;
    return "Поле обов'язкове"
}



