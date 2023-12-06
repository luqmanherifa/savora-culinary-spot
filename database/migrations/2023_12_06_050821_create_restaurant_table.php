<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurant', function (Blueprint $table) {
            $table->id();
            $table->string('name_restaurant');
            $table->string('slug_restaurant')->unique();
            $table->text('description_restaurant');
            $table->string('contact_restaurant');
            $table->string('address_restaurant');
            $table->string('district_restaurant');
            $table->integer('star_restaurant');
            $table->integer('rating_restaurant');
            $table->string('image_restaurant')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurant');
    }
};
