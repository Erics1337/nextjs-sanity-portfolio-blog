import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

import React from 'react'

export const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => (
            <ArticleItem article={article} key={article.id} />
            ))}
        </div>
    )
}

export default ArticleList