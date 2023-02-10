<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ToDoList
 * 
 * @property int $id
 * @property string $text
 * @property bool $completed
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class ToDoList extends Model
{
	protected $table = 'to_do_list';

	protected $casts = [
		'completed' => 'bool'
	];

	protected $fillable = [
		'text',
		'completed'
	];
}
