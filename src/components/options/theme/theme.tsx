import React, { forwardRef } from 'react'
import styles from "./theme.module.css";
import { getThemes } from '@/lib/data';

const ThemeSearch = forwardRef<HTMLDivElement>((props, ref) => {
  const themes = getThemes();

  return (
    <div className={styles.container}>
        <label>Themes</label>
        <div className={styles.theme_container} ref={ref}>
            {themes.map((theme) => (
              <div key={theme}>
                  <input type="checkbox" value={theme} />
                  {theme}
                </div>
            ))}
        </div>
    </div>
  )
});

export default ThemeSearch