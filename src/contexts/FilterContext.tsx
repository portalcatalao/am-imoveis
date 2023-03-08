import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { findInOptions, findValueInOptions, normalizeString, normalizeStringToQuery } from "../helpers/functions";
import { maskPrice } from "../helpers/mask";
import { useCheckBox, useCheckBoxProps } from "../hooks/useCheckBox";
import { useCount, useCountProps } from "../hooks/useCount";
import { useForm, useFormProps } from "../hooks/useForm";
import { useSelect, useSelectProps } from "../hooks/useSelect";
import { api } from "../services/api";
import { IProperty } from "../types/interfaces";
import { adTypeData, propertyTypeData } from "../utils/data";

interface FilterProps {
    adType: string,
    maxPrice: string,
    type: string,
    city: string,
    district: string
}

interface FilterContextProps {
    handleShowFilter: () => void;
    fillFilter(filter: FilterProps): Promise<void>;
    findProperties(): Promise<void>;
    propertyType: useSelectProps;
    city: useSelectProps;
    district: useSelectProps;
    propertyTypeSelect: useSelectProps;
    adType: useSelectProps;
    priceMin: useFormProps;
    priceMax: useFormProps;
    roomNumber: useCountProps;
    bathroomNumber: useCountProps;
    garageNumber: useCountProps;

    loading: boolean;
    results: IProperty[];
    setResults: any;
    total: number;
}

const FilterContext = createContext({} as FilterContextProps);

const FilterProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [total, setTotal] = useState(0);
    const [results, setResults] = useState<IProperty[]>([]);
    const [initialFilter, setInitialFilter] = useState<FilterProps>(null);
    const city = useSelect();
    const district = useSelect();
    const propertyType = useSelect();
    const propertyTypeSelect = useSelect();
    const priceMin = useForm('price');
    const priceMax = useForm('price');
    const roomNumber = useCount({
        max: 5,
        min: 0
    });
    const bathroomNumber = useCount({
        max: 5,
        min: 0
    });
    const garageNumber = useCount({
        max: 5,
        min: 0
    });
    const [show, setShow] = useState(false);
    const type = useSelect();
    const adType = useSelect();

    const handleShowFilter = () => setShow(!show);

    const handleDistricts = async (city: string) => {
        { district.value && district.onChange(null) }
        const districts = await api.post('address/districts', {
            city
        }).then(res => res.data);
        district.setOptions(districts);
    }

    const findCities = async () => {
        const cities = await api.get('address/cities').then(res => res.data);
        { cities && city.setOptions(cities) }
    }

    const getPathApi = () => {
        let path = `property?realEstateId=${process.env.NEXT_PUBLIC_REAL_ESTATE_ID}`;
        { adType.value ? path = path + `&adType=${adType.value.enum}` : null }
        { priceMax.value ? path = path + `&maxPrice=${priceMax.value.toString().replace(/[^0-9]/g, '')}` : null }
        { city.value ? path = path + `&city=${normalizeStringToQuery(city.value.name)}` : null }
        { district.value ? path = path + `&district=${normalizeStringToQuery(district.value.name)}` : null }
        { propertyType.value ? path = path + `&type=${propertyType.value.enum}` : null }
        return path;
    }

    const getPathForRoute = () => {
        let path = `/imoveis/filter?`;
        { adType.value ? path = path + `adType=${adType.value.enum}` : null }
        { priceMax.value ? path = path + `&maxPrice=${priceMax.value.toString().replace(/[^0-9]/g, '')}` : null }
        { city.value ? path = path + `&city=${normalizeString(city.value.name)}` : null }
        { district.value ? path = path + `&district=${normalizeString(district.value.name)}` : null }
        { propertyType.value ? path = path + `&propertyType=${propertyType.value.enum}` : null }
        return path;
    }

    const getPathByRoute = () => {
        const { city, maxPrice, district, propertyType, adType } = router.query;
        let path = `property?realEstateId=${process.env.NEXT_PUBLIC_REAL_ESTATE_ID}`;

        const normalize = (value: string) => value.replaceAll('-', ' ');

        { adType ? path = path + `&adType=${adType}` : null }
        { maxPrice ? path = path + `&maxPrice=${maxPrice.toString().replace(/[^0-9]/g, '')}` : null }
        { city ? path = path + `&city=${normalize(city.toString())}` : null }
        { district ? path = path + `&district=${normalize(district.toString())}` : null }
        { propertyType ? path = path + `&type=${normalize(propertyType.toString())}` : null }
        return path;
    }

    const findProperties = async () => {
        try {
            setLoading(true);
            await router.push(router.asPath, getPathForRoute())
            const response = await api.get(getPathApi()).then(res => res.data);
            if (response.properties) {
                setResults(response.properties)
                setTotal(response.total);
            };
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const findInitialProperties = async (filter: FilterProps) => {
        try {
            setLoading(true);

            const response = await api.get(getPathByRoute()).then(res => res.data);
            if (response.properties) {
                setResults(response.properties)
                setTotal(response.total);
            };
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const fillFilter = async (filter: FilterProps) => {
        setInitialFilter(filter);
        { filter.maxPrice ? priceMax.setValue(maskPrice(filter.maxPrice)) : null }
        { filter.adType ? adType.onChange(findValueInOptions(filter.adType, adTypeData)) : null }
        { filter.type ? propertyType.onChange(findValueInOptions(filter.type, propertyTypeData)) : null }
        { filter.city ? city.onChange(findValueInOptions(filter.city, city.options)) : null }
    }

    useEffect(() => {
        if (city.value) handleDistricts(city.value.name);
    }, [city.value]);

    useEffect(() => {
        findCities();
        propertyType.setOptions(propertyTypeData)
        propertyTypeSelect.setOptions(propertyTypeData)
        type.setOptions(propertyTypeData);
        adType.setOptions(adTypeData);
    }, []);

    useEffect(() => {
        if (initialFilter) findInitialProperties(initialFilter);
    }, [initialFilter]);

    useEffect(() => {
        {
            initialFilter?.city &&
                city.options.length > 0 ?
                city.onChange(
                    findValueInOptions(
                        initialFilter.city,
                        city.options
                    )) :
                null
        }
    }, [city.options]);

    useEffect(() => {
        {
            initialFilter?.district &&
                district.options.length > 0 ?
                district.onChange(
                    findValueInOptions(
                        initialFilter.district,
                        district.options
                    )) :
                null
        }
    }, [district.options]);

    return (
        <FilterContext.Provider value={{
            handleShowFilter,
            fillFilter,
            findProperties,
            city,
            district,
            propertyType,
            propertyTypeSelect,
            adType,
            bathroomNumber,
            garageNumber,
            priceMax,
            priceMin,
            roomNumber,

            loading,
            results,
            setResults,
            total
        }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}

export { useFilter, FilterProvider };