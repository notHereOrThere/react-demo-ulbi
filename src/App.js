import React, {useRef, useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'JS1', body: 'Description'},
        {id: 3, title: 'JS2', body: 'Description'}
    ])

    return (
        <div className="App">
            <PostForm/>
            <PostList posts={posts} title={"JS"}/>
        </div>
    );
}

export default App;
