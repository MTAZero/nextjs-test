import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../../redux';
import styles from '../../styles/RightBar.module.scss';
import { FaBeer } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdFeed } from 'react-icons/md';
import { RiNumbersLine } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';

export const RightBar = (prop: any) => {
    const userInfo = useSelector((state: any) => state.auth.userInfo);
    const dispatch = useDispatch();
    const actions = useActions();

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

    return (
        <div className={styles.RightBar}>
            {userInfo && renderUserInfo()}

            <Link href="/">
                <div className={styles.MenuItem}>
                    <div className={styles.MenuIcon}>
                        <AiTwotoneHome />
                    </div>
                    Home
                </div>
            </Link>
            <Link href="/posts">
                <div className={styles.MenuItem}>
                    <div className={styles.MenuIcon}>
                        <MdFeed />
                    </div>
                    Feeds
                </div>
            </Link>
            <Link href="/get-numbers">
                <div className={styles.MenuItem}>
                    <div className={styles.MenuIcon}>
                        <RiNumbersLine />
                    </div>
                    Get Numbers
                </div>
            </Link>

            <div
                className={styles.MenuItem}
                onClick={() => {
                    dispatch(actions.AuthActions.logout());
                }}
            >
                <div className={styles.MenuIcon}>
                    <BiLogOut />
                </div>
                Logout
            </div>
        </div>
    );
};
