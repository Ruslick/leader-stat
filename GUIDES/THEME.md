Гайд по использованию переменных темы

В файле src/style/theme.scss Есть переменные которые можно юзать глобально.

текущие переменные это:
--bg
--accent
--color-primary

Эти переменные адаптивные для разных тем.

Пример импользования:
.button {
background-color: var(--accent);
color: var(--color-primary);
&:hover {
background-color: var(--color-primary);
color: var(--bg)
}

Если нужна переменная с текущей темой, то ее можно получить из хука useTheme.
