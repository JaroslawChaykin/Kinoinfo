import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import { staffAPI } from '../../services/StaffService';

const Name = () => {
    const params = useParams();
    const {data: name, isLoading, error} = staffAPI.useFetchNameQuery(params.id)

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