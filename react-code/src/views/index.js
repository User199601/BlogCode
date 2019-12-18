import {Loading} from '../components'
import Loadable from 'react-loadable' 

const Article = Loadable({
    loader:()=>import('./article' ),
    loading:Loading
})

const About = Loadable({
    loader:()=>import('./about' ),
    loading:Loading
})

const UpdateLog = Loadable({
    loader:()=>import('./updateLog' ),
    loading:Loading
})

const Connect = Loadable({
    loader:()=>import('./connect' ),
    loading:Loading
})

const ArticleDetail = Loadable({
    loader:()=>import('./articleDetail' ),
    loading:Loading
})

const NotFound = Loadable({
    loader:()=>import('./NotFound' ),
    loading:Loading
})

export {
    Article,
    About,
    UpdateLog,
    Connect,
    ArticleDetail,
    NotFound
}