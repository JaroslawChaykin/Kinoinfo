import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import FilmService from '../../API/FilmService';
import Loader from '../../components/UI/Loader/Loader';

const Name = () => {
    const [name, setName] = useState(null);

    const params = useParams();

    const [fetchName, isLoading, error] = useFetching(async () => {
        const response = await FilmService.getName(params.id);
        setName(response.data);
    });

    useEffect(() => {
        fetchName()
    }, []);

    return (
      <div>
          {
              isLoading
                ? <Loader/>
                : <div>
                  <h1>{name?.nameRu || name?.nameEn}</h1>
                </div>
          }
      </div>
    );
};

export default Name;