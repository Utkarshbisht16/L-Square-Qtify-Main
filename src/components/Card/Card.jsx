import React from "react";
import {Tooltip, Chip} from '@mui/material';
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Card({ data, type}) {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#121212',
          },
        },
      });
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, follows, songs, title, slug} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="lazy" />
                                    <div className={styles.banner}>
                                    <div className={styles.pill}>
                                        <p>{follows} Follows</p>
                                    </div>
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                );
            }
            case "songs": {
                const { image, likes, title} = data;
                return (<div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="song" loading="lazy" />
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p>{likes} Likes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <p>{title}</p>
                    </div>
                </div>);
            }
            default:
                return <></>;
        }
    };
    return getCard(type);
}

export default Card;