import { useState } from "react";

import { ApiEndpoints } from "@/shared/api";
import { allObjectsActions } from "@/shared/stores/objects-store";

import { useAppDispatch } from "../redux-service";

const OBJECTS_COUNT_IN_PAGE = 10; // Кол-во постов на странице | в одном запросе

const useGetObjectsHook = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(-1);

    const dispatch = useAppDispatch();

    const fetchObjects = async ({
        page,
        byUser,
        favorites = false,
        filterString,
    }: {
        page: number;
        byUser?: string;
        favorites?: boolean;
        filterString: string;
    }) => {
        // if (loading || totalPages === page) return;

        dispatch(allObjectsActions.setLoading(true));

        if (page === 1) {
            dispatch(allObjectsActions.setObjectsToList({ objects: [] }));
        }

        try {
            if (favorites) {
                // Запрашиваю избранные объекты
                ApiEndpoints.object
                    .findFavorites({ pageNum: page, pageSize: OBJECTS_COUNT_IN_PAGE, searchText: filterString })
                    .then((res) => {
                        dispatch(allObjectsActions.addObjectsToList({ objects: res.objects }));
                        setTotalPages(res.totalPages);
                    });
            } else if (!byUser) {
                // Запрашиваю все подряд объекты
                ApiEndpoints.object
                    .findText({ pageNum: page, pageSize: OBJECTS_COUNT_IN_PAGE, searchText: filterString })
                    .then((res) => {
                        dispatch(allObjectsActions.addObjectsToList({ objects: res.objects }));
                        setTotalPages(res.totalPages);
                    });
            } else {
                // Список всех доступных объектов
                ApiEndpoints.object
                    .findByUser({
                        pageNum: page,
                        pageSize: OBJECTS_COUNT_IN_PAGE,
                        searchText: filterString,
                        userId: byUser,
                    })
                    .then((res) => {
                        dispatch(allObjectsActions.addObjectsToList({ objects: res.objects }));
                        setTotalPages(res.totalPages);
                    });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setCurrentPage(page);
            dispatch(allObjectsActions.setLoading(false));
        }
    };

    return { fetchObjects, currentPage, totalPages };
};

export { useGetObjectsHook };
