import { queryHelper } from "../../../db/database";

export const fetchPeople = async () => {
  try {
    return await queryHelper('SELECT * FROM wedding_invites_people');
  } catch (error) {
    console.error('Error fetching people:', error);
    return [];
  }
};

export const fetchGroupById = async (rsvpId: string) => {
  try {
    return await queryHelper(`SELECT g.id, g.name, g.confirmed, g.has_scanned,
    COUNT(p.id) AS max_number_of_people
    FROM wedding_invites_group g
    LEFT JOIN wedding_invites_people p ON g.id = p.group_id
    WHERE g.id = $1
    GROUP BY g.id, g.name;`, [rsvpId], true);
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};

export const fetchGroups = async () => {
  try {
    return await queryHelper('SELECT * FROM wedding_invites_group');
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};

export const updateScannedStatus = async (rsvpId: string) => {
  try {
    return await queryHelper(`UPDATE wedding_invites_group
    SET has_scanned = true
    WHERE id = $1`, [rsvpId]);
  } catch (error) {
    console.error('Error updating group:', error);
    return [];
  }
};

export const updateWeddingGroup = async (rsvpId: string, confirmed: boolean, numberOfPeople: number) => {
  try {
    return await queryHelper(`UPDATE wedding_invites_group
    SET confirmed = $2, number_of_people = $3
    WHERE id = $1`, [rsvpId, confirmed, numberOfPeople]);
  } catch (error) {
    console.error('Error updating group:', error);
    return [];
  }
}