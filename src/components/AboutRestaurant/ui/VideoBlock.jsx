import PlayButtonIcon from '@shared/ui/assets/icons/playButtonIcon';
import { image5 } from '@shared/ui/assets/images';
import { useState } from 'react';
import classes from './VideoBlock.module.scss';

const VideoBlock = () => {
	const [play, setPlay] = useState(false);

	return (
		<div className={classes.video}>
			{/* <video controls width='100%'>
				<source src='' type='' />
			</video> */}
			{/* <iframe
				width='100%'
				height='500'
				src='https://youtu.be/TknmBq9HKNA?si=7eqT35eFu2Q6PaBm'
				frameborder='0'
				title='Summer Palace'
				allowFullScreen
			></iframe> */}
			{play ? (
				<iframe
					className={classes.video__frame}
					src='https://www.youtube.com/embed/TknmBq9HKNA?si=0ODFgbwIcRPcmngn'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerpolicy='strict-origin-when-cross-origin'
					allowfullscreen
				/>
			) : (
				<div className={classes.video__play}>
					<img
						className={classes['video__play-image']}
						src={image5}
						alt='Summer Palace'
					/>
					<button
						onClick={() => setPlay(true)}
						className={classes['video__play-button']}
					>
						<PlayButtonIcon />
					</button>
				</div>
			)}
		</div>
	);
};

export default VideoBlock;
