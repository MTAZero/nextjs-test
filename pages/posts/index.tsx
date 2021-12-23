import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../../redux';
import styles from '../../styles/Post.module.scss';
import { AiTwotoneHeart } from 'react-icons/ai';

const Post = (props: any) => {
    const dispatch = useDispatch();
    const actions = useActions();

    let post = props.post;
    const userInfo = useSelector((state: any) => state.auth.userInfo);

    let [buttonState, setButtonState] = useState('normal');

    const renderUserInfo = () => {
        return (
            <div className={styles.userInfo}>
                <img
                    className={styles.userAvatar}
                    src={userInfo.avatar}
                    alt="avatar"
                />
                <div className={styles.userFullname}>{userInfo.fullname}</div>
            </div>
        );
    };

    const getClassName = (state: any) => {
        if (state == 'press') return styles.LikeButtonPress;

        return styles.LikeButton;
    };

    const handleOnClick = () => {
        setButtonState('press');

        setTimeout(() => {
            setButtonState('normal');
        }, 1000);
    };

    return (
        <div className={styles.Feed}>
            {renderUserInfo()}
            <div className={styles.FeedContent}>
                {post.image && (
                    <img src={post.image} className={styles.image} alt="img" />
                )}
                {post.content}
            </div>
            <div className={styles.FeedControl}>
                <div
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'yellow'
                    }}
                >
                    <div
                        className={getClassName(buttonState)}
                        onClick={() => {
                            handleOnClick();
                            dispatch(actions.PostActions.likePost(post._id));
                        }}
                    >
                        <AiTwotoneHeart className={styles.IconButton} />

                        <div className={styles.textHide}>liked!</div>
                    </div>
                </div>
                <div className={styles.num_like}>{post.num_like}</div>
            </div>
        </div>
    );
};

const Posts: NextPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts.posts);
    const actions = useActions();

    const userInfo = useSelector((state: any) => state.auth.userInfo);

    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(actions.PostActions.loadListPosts());
    }, []);

    const renderUserInfo = () => {
        return (
            <div className={styles.userInfo}>
                <img
                    className={styles.userAvatar}
                    src={userInfo.avatar}
                    alt="avatar"
                />
                <div className={styles.userFullname}>{userInfo.fullname}</div>
            </div>
        );
    };

    const handleCreatePost = () => {
        if (text == '') return;

        let post = {
            title: '',
            subtile: '',
            content: text,
        };

        dispatch(actions.PostActions.createPost(post));

        setText('');
    };

    return (
        <div className={styles.PostPage}>
            <Head>
                <title>Posts Page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.CreatePanel}>
                {renderUserInfo()}
                <textarea
                    className={styles.MainContentArea}
                    placeholder="What do you feel?"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleCreatePost();
                    }}
                />
                <div className={styles.ControlPanel}>
                    <div
                        className={styles.CreateButton}
                        onClick={() => {
                            handleCreatePost();
                        }}
                    >
                        Post
                    </div>
                </div>
            </div>

            <div className={styles.ListFeed}>
                {posts.map((post: any, index: any) => {
                    return <Post post={post} />;
                })}
            </div>
        </div>
    );
};

export default Posts;
