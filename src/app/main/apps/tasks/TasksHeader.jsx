import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import NotificationModel from './../notifications/models/NotificationModel';
import NotificationTemplate from './../notifications/NotificationTemplate';

import _ from '@lodash';
import { useGetTasksQuery } from './TasksApi';

/**
 * The tasks header.
 */
function TasksHeader() {
	const { data: tasks } = useGetTasksQuery();


	const remainingTasks = _.filter(tasks, (item) => item.type === 'task' && !item.completed).length;
	return (
		<div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 p-24 sm:p-32 w-full border-b-1 justify-between">
			<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12">
				<motion.span
					initial={{ x: -20 }}
					animate={{ x: 0, transition: { delay: 0.2 } }}
				>
					<Typography className="text-24 md:text-32 font-extrabold tracking-tight leading-none">
						Lession
					</Typography>
				</motion.span>

				<motion.span
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
				>
					<Typography
						className="text-14 font-medium ml-2"
						color="text.secondary"
					>
						{`${remainingTasks} remaining lession`}
					</Typography>
				</motion.span>
			</div>

			<div className="flex items-center -mx-8">
				<Button
					className="mx-8 whitespace-nowrap"
					component={NavLinkAdapter}
					to="section"
				>
					<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
					<span className="mx-8">Add Module</span>
				</Button>
				<Button
					className="mx-8 whitespace-nowrap"
					variant="contained"
					color="secondary"
					component={NavLinkAdapter}
					to="task"
				>
					<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
					<span className="mx-8">Add lession</span>
				</Button>
			</div>
		</div>
	);
}

export default TasksHeader;
