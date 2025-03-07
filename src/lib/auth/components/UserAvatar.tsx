'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { usePreloadedSession } from '@/lib/auth/components/SessionProvider';

export function UserAvatar() {
  const data = usePreloadedSession();

  if (!data) return <Skeleton className='w-10 h-10 rounded-full' />;

  return (
    <Avatar>
      <AvatarImage src={data.user.image || undefined} />
      <AvatarFallback>
        {data.user.name.charAt(0)}
        {data.user.name.charAt(1)}
      </AvatarFallback>
    </Avatar>
  );
}
