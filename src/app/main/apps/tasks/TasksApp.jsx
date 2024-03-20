import FusePageSimple from '@fuse/core/FusePageSimple';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import TasksSidebarContent from './TasksSidebarContent';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper
	}
}));

/**
 * The tasks app.
 */
function TasksApp() {
	const routeParams = useParams();

	debugger
	const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	console.log(routeParams);
	useEffect(() => {
		setRightSidebarOpen(Boolean(routeParams.productId));
	}, [routeParams]);
	return (
		<Root
			header={<TasksHeader />}
			content={<TasksList />}
			rightSidebarContent={<TasksSidebarContent />}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => setRightSidebarOpen(false)}
			rightSidebarWidth={640}
			
		/>
	);
}

export default TasksApp;
