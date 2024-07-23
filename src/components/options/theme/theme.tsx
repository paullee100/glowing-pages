import React, { forwardRef } from 'react'
import styles from "./theme.module.css";
import { getThemes } from '@/lib/data/animeData';

const ThemeSearch = forwardRef<HTMLDivElement>((props, ref) => {
  const themes = getThemes();

  return (
    <div className={styles.container}>
        <label><h1>Themes</h1></label>
        <div className={styles.theme_container} ref={ref}>
            {themes.map((theme) => (
              <div key={theme}>
                  <input id={theme} type="checkbox" value={theme} />
                  <label htmlFor={theme}>{theme}</label>
                </div>
            ))}
        </div>
    </div>
  )
});

ThemeSearch.displayName = 'ThemeSearch';

export default ThemeSearch