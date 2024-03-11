import { Button, Grid, Typography } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ApiClient from '../../services/apiClient';
import EmptyProjectCard from '../Cards/EmptyProjectCard';
import ProjectCardWithOptions from '../Cards/ProjectCardWithOptions';
import ProjectListSkeleton from '../Skeletons/ProjectListSkeleton';

export default function UserProjectsList() {
  const apiClient = new ApiClient<IProject>('projects/user');
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';

  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['user', 'projects', q],
      queryFn: ({ pageParam = 1 }) =>
        apiClient.getAll({ params: { q, page: pageParam } }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : null;
      },
      initialPageParam: 1,
    });

  if (isLoading) return <ProjectListSkeleton length={3} />;

  return (
    <>
      {!data?.pages[0].data.length ? (
        <EmptyProjectCard>
          <Typography component={Link} to="/novo-projeto" color="neutral.110">
            Adicione seu primeiro projeto
          </Typography>
        </EmptyProjectCard>
      ) : (
        <Grid
          container
          spacing={2}
          mb={8}
          justifyContent={{ xs: 'center', sm: 'start' }}
        >
          {data.pages.map((page, key) => (
            <Fragment key={key}>
              {page.data.map(project => (
                <Grid
                  item
                  key={project.id}
                  maxWidth={372}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <ProjectCardWithOptions project={project} />
                </Grid>
              ))}
            </Fragment>
          ))}

          {hasNextPage && (
            <Button
              variant="contained"
              color="info"
              onClick={() => fetchNextPage()}
              sx={{
                mt: 6,
                textTransform: 'none',
              }}
              disabled={isFetching}
            >
              {isFetching ? 'Carregando...' : 'Carregar mais'}
            </Button>
          )}
        </Grid>
      )}
    </>
  );
}
