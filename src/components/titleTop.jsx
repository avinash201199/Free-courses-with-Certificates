import React from 'react'
import { useTranslation } from 'react-i18next';

export default function titleTop() {
    const { t } = useTranslation();
    return (
        <div className="title-nav">
            <span className="material-symbols-outlined">code</span>
            {t('main.title')}
            <span className="material-symbols-outlined">code_off</span>
        </div>
    )
}
