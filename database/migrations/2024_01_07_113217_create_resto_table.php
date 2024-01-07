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
        Schema::create('resto', function (Blueprint $table) {
            $table->id();
            $table->string('name_resto');
            $table->string('slug_resto')->unique();
            $table->string('cuisine_1_resto');
            $table->string('cuisine_2_resto')->nullable();
            $table->string('cuisine_3_resto')->nullable();
            $table->string('regency_resto');
            $table->string('city_resto');
            $table->integer('star_resto');
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
        Schema::dropIfExists('resto');
    }
};
