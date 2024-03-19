#include "lists.h"

/**
 * reverse_listint - Reverses a linked list.
 * @head: Pointer to the first node in the list.
 * Return: Pointer to the first node in the new list.
 */
void reverse_listint(listint_t **head)
{
	listint_t *prev = NULL;
	listint_t *current = *head;
	listint_t *next = NULL;

	while (current)
	{
		next = current->next;
		current->next = prev;
		prev = current;
		current = next;
	}

	*head = prev;
}

/**
 * is_palindrome - Checks if a linked list is a palindrome.
 * @head: Double pointer to the linked list.
 *
 * Return: 1 if it is, 0 if not.
 */
int is_palindrome(listint_t **head)
{
	listint_t *slow_ptr = *head, *fast_ptr = *head, *temp_ptr = *head, *reversed_ptr = NULL;

	if (*head == NULL || (*head)->next == NULL)
		return (1);

	while (1)
	{
		fast_ptr = fast_ptr->next->next;
		if (!fast_ptr)
		{
			reversed_ptr = slow_ptr->next;
			break;
		}
		if (!fast_ptr->next)
		{
			reversed_ptr = slow_ptr->next->next;
			break;
		}
		slow_ptr = slow_ptr->next;
	}

	reverse_listint(&reversed_ptr);

	while (reversed_ptr && temp_ptr)
	{
		if (temp_ptr->n == reversed_ptr->n)
		{
			reversed_ptr = reversed_ptr->next;
			temp_ptr = temp_ptr->next;
		}
		else
			return (0);
	}

	if (!reversed_ptr)
		return (1);

	return (0);
}

