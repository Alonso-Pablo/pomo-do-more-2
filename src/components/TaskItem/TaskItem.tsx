import clsx from 'clsx';
import { RenderItem } from '@ts/types';
import TaskContent from '@components/TaskContent';
import Panel from '@components/ui/Panel';

type TaskItemProps = RenderItem;

export default function TaskItem({ value, props, isDragged }: TaskItemProps) {
  return (
    <li
      key={props.key}
      className={clsx('px-3 w-full max-w-[472px]', isDragged === false && 'animate-appearBottom')} // FUTURE CONFIG
      {...props}
    >
      <Panel backClassName="w-full" frontClassName="flex flex-col p-0">
        <TaskContent value={value} isDragged={isDragged} />
      </Panel>
    </li>
  );
}
