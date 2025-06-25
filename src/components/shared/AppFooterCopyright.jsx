function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://linkedin.com/in/lgastaldi3"
					target="__blank"
					className="underline dark:hover:underline hover:underline-gold-600 dark:hover:text-yellow-300 ml-1 duration-500"
				>
					Lorenzo Gastaldi
				</a>
				.
				{/*<a
					href=""
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-yellow-600 dark:hover:text-yellow-300 ml-1 duration-500"
				>
					Stoman
				</a>*/}
			</div>
		</div>
	);
}

export default AppFooterCopyright;
