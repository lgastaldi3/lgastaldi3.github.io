import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { Link } from 'react-router-dom';
import Button from '../reusable/Button';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<div>
						{
							bio.header !== '' &&<p
								className="mb-4 font-general-bold text-ternary-dark dark:text-ternary-light text-2xl"
								key={bio.header}>
									{bio.header}
							</p>
						}
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={bio.id}
						>
							{bio.bio}
						</p>
					</div>
				))}
				<div className="mt-8 sm:mt-10 flex justify-center">
					<Link
						to="/projects"
						className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-yellow-300 hover:bg-yellow-600 focus:ring-1 focus:ring-yellow-900 text-white text-lg sm:text-xl duration-300"
						aria-label="Check Out My Work"
						>
						<Button title="Check Out My Work" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
