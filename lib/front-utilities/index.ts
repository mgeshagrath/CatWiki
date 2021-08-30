export const checkSelected = (path: string, goTo: string): string =>
  path.replace('/', '') === goTo ? 'styles.selected' : '';
