export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "prettier",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      quotes: ["error", "single"], // Força o uso de aspas simples
      semi: ["error", "never"], // Remove o uso de ponto e vírgula no final
    },
    overrides: [
      {
        files: ["**/styled-components.d.ts"],
        rules: {
          "@typescript-eslint/no-empty-interface": "off",
        },
      },
    ],
  }
);
