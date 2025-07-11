import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import { Link } from 'react-router-dom';
import Button from '../components/reusable/Button';


const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-yellow-300 hover:bg-yellow-600 focus:ring-1 focus:ring-yellow-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
