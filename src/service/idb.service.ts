import { openDB } from 'idb';

export function useIdb() {
	const dbPromise = openDB('bonapp', 1, {
		upgrade(db) {
			db.createObjectStore('keyval');
		},
	});

	async function saveInIdb(key: string, val: any) {
		return (await dbPromise).put('keyval', val, key);
	}

	async function getFromIdb(key: string) {
		return (await dbPromise).get('keyval', key);
	}

	async function removeFromIdb(key: string) {
		return (await dbPromise).delete('keyval', key);
	}

	async function clearIdb() {
		return (await dbPromise).clear('keyval');
	}

	async function getKeysFromIdb() {
		return (await dbPromise).getAllKeys('keyval');
	}

	return {
		getFromIdb,
		saveInIdb,
		removeFromIdb,
		clearIdb,
		getKeysFromIdb,
	};
}
