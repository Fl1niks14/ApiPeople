import {getApiResourse} from '../../utils/network'
import { useEffect, useState } from 'react'
import './PagePeople.css' 
import {API_PEOPLE} from '../../constants/Api'

const PagePeople = () => {
	const [people , setPeople] = useState(null)
	
	const getResurs = async (url) => {
		const res = await getApiResourse(url);
			
		const Peoplelist = res.results.map(({name , url}) => {
			return {
				name ,
				url
			}
		}) 
		setPeople(Peoplelist);
	} 
	
 useEffect(() => {
	getResurs(API_PEOPLE)
	
 }, [])
 
	return (
		<>
		{people && (
			<ul>
				{people.map(({ name }) => 
					<li key={name}>{name}</li>
				)}
			</ul>
			)}
		</>
	)
}

export default PagePeople;
